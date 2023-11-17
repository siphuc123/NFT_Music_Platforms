import React, { useState } from "react";
import axios from "axios";

// import './resources/css/custom2.css';
import { signAndConfirmTransactionFe } from "./utilityfunc";

import disPic from './resources/images/logo.png';
const xApiKey = "aeAo1Ko09G0c-YCC"; //Enter Your x-api-key here
const Create = () => {
	const [file, setfile] = useState();
	const [displayPic, setDisplayPic] = useState(disPic);
	const [network, setnetwork] = useState("devnet");
	// const [privKey, setprivKey] = useState();
	const [publicKey, setPublicKey] = useState('');
	const [name, setName] = useState();
	const [symbol, setSymbol] = useState();
	const [desc, setDesc] = useState();
	const [attr, setAttr] = useState(JSON.stringify([{"trait_type": "edification","value": "100"}]));
	const [extUrl, setExtUrl] = useState();
	const [maxSup, setMaxSup] = useState(0);
	const [roy, setRoy] = useState();

	const [minted,setMinted] = useState();
	const [saveMinted,setSaveMinted] = useState();
	const [errorRoy, setErrorRoy] = useState();

	const [status, setStatus] = useState("Awaiting Upload");
	const [dispResponse, setDispResp] = useState("");

	const [connStatus, setConnStatus] = useState(true);

	const callback = (signature,result) => {
		console.log("Signature ",signature);
		console.log("Mint NFT SUCCESSFULLY");
		if(signature.err === null)
		{
			setMinted(saveMinted);
			setStatus("success: Successfully Signed and Minted.");
		}
	  }

	const mintNow = (e) => {
		e.preventDefault();
		setStatus("Loading");
		let formData = new FormData();
		formData.append("network", network);
		formData.append("wallet", publicKey);
		formData.append("name", name);
		formData.append("symbol", symbol);
		formData.append("description", desc);
		formData.append("attributes", JSON.stringify(attr));
		formData.append("external_url", extUrl);
		formData.append("max_supply", maxSup);
		formData.append("royalty", roy);
		formData.append("file", file);

		axios({
			// Endpoint to send files
			url: "https://api.shyft.to/sol/v1/nft/create_detach",
			method: "POST",
			headers: {
				"Content-Type": "multipart/form-data",
				"x-api-key": xApiKey,
				Accept: "*/*",
				"Access-Control-Allow-Origin": "*",
			},

			// Attaching the form data
			data: formData,
		})
			// Handle the response from backend here
			.then(async (res) => {
				console.log(res);
				if(res.data.success === true)
				{
					setStatus("success: Transaction Created. Signing Transactions. Please Wait.");
					const transaction = res.data.result.encoded_transaction;
					setSaveMinted(res.data.result.mint);
					const ret_result = await signAndConfirmTransactionFe(network,transaction,callback);
            		console.log(ret_result);
					setDispResp(res.data);
					
				}
			})

			// Catch errors if any
			.catch((err) => {
				console.warn(err);
				setStatus("success: false");
			});

	}

	return (
		<div className=" d-flex"
			style={{
				justifyContent: "center",
				alignItems: "center",
				width: "100%"
			}}
		>
			<div className="container p-5"
				style={{
					width: "50%",
					
				}}
			>
				{connStatus && (<div className="form-container rounded py-3 px-5" style={{ backgroundColor: "#FFFFFFEE", boxShadow: "0px 0px 20px 1px grey", borderRadius: "10px"}}>
					<h3 className="pt-4">Create An Nft</h3>
					<form>
						<div className="img-container text-center mt-5">
							<div
								className="uploaded-img"
								style={{
									height: "200px",
									width: "200px",
									backgroundColor: "whitesmoke",
									boxShadow: "0px 0px 20px 1px black",
									margin: "0 auto",
									borderRadius: "10px",
								}}
							>
								<img
									src={displayPic}
									alt="To be uploaded"
									style={{ height: "100%", width: "100%", objectFit: "cover" }}
								/>
							</div>
							<div className="mt-3"></div>
							<button className="btn btn-primary text-light m-2">
								Select File</button><br></br>
							<input
								type="file"
								style={{ position: "absolute", zIndex: "3", marginTop: "-50px", marginLeft: "-70px", width: "150px", height: "40px", opacity: "0" }}
								onChange={(e) => {
									const [file_selected] = e.target.files;
									setfile(e.target.files[0]);
									setDisplayPic(URL.createObjectURL(file_selected));
								}}
							/>
							<div className="mb-3"></div>
						</div>
						<div className="fields">

							<table className="table">
								<tbody>
								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label for="basic-url" className="form-label" style={{textAlign: "left"}}>Network</label>
											<select
												name="network"
												className="form-select"
												onChange={(e) => setnetwork(e.target.value)}
											>
												<option value="devnet">Devnet</option>
												<option value="testnet">Testnet</option>
												<option value="mainnet-beta">Mainnet Beta</option>
											</select>
											
										</div>
									</div>
									<div className="col-md-6 mb-4">
										<div className="form-outline">
										<label for="basic-url" class="form-label">PublicKey</label>
										<input type="text" className="form-control" placeholder="Enter Your Wallet's Public Key" value={publicKey} 
										onChange={(e) => setPublicKey(e.target.value)} required />
										
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
										<label for="basic-url" class="form-label">NFT Name</label>
										<input type="text" className="form-control" placeholder="Enter NFT Name" value={name} onChange={(e) => setName(e.target.value)} required />
										
										</div>
									</div>
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label for="basic-url" class="form-label">Symbol</label>
											<input type="text" className="form-control" placeholder="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
											
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label for="basic-url" class="form-label mt-3">Description</label></div>
											<textarea className="form-control" placeholder="Enter Description" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
											
											
									</div>
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label for="basic-url" class="form-label mt-3">Attributes</label>
											<textarea className="form-control" placeholder="Enter Attributes" value={attr} onChange={(e) => setAttr(e.target.value)} required></textarea>
											
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 mb-4">
										<div className="form-outline">
											<label for="basic-url" class="form-label mt-3">Royalty</label></div>
											<input className="form-control" placeholder="Enter Royalty" value={desc} onChange={(e) => setRoy(e.target.value)} required></input>
											
											
									</div>
								</div>
										
									
								</tbody>
							</table>
							<div className="p-5 text-center">
								<button type="submit" className="btn btn-success button-25" onClick={mintNow}>Submit</button>
							</div>
						</div>
					</form>
				</div>)}

				<div className="py-5">
					<h2 className="text-center pb-3">Response</h2>
					<div className="status text-center text-info p-3"><b>{status}</b></div>
					<textarea
						className="form-control"
						name=""
						value={JSON.stringify(dispResponse)}
						id=""
						cols="30"
						rows="10"
					></textarea>
				</div>
				<div className="p-3 text-center">
					{dispResponse && (<a href={`https://explorer.solana.com/address/${minted}?cluster=devnet`} target="_blank" className="btn btn-warning m-2 py-2 px-4">View on Explorer</a>)}
				</div>
				
			</div>
		
		</div>

		
	);
};

export default Create;
