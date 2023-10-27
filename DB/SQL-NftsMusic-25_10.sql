CREATE DATABASE [NFT]

USE [NFT]
GO
/****** Object:  Table [dbo].[User]    Script Date: 9/25/2023 3:07:02 PM ******/
CREATE TABLE [dbo].[Users] (
	[Id] [int] primary key not null,
	[CreatedAt] [Date] not null,
	[UpdatedAt] [Date] not null,
	[DeletedAt] [Date] not null,
	[Username] [Nvarchar] (50) not null,
	[Email] [Varchar] (50) not null,
	[Password] [Varchar] (50) not null,
	[AboutMe] [Nvarchar] (100) not null,
	[BrithDate] [Date] not null,
	[Sex] [Nvarchar] (5) not null,
	[WalletId] [Int] not null

)
GO

/****** Object:  Table [dbo].[Wallets]    Script Date: 9/25/2023 3:07:02 PM ******/

CREATE TABLE [dbo].[Wallets] (
	[Id] [int] primary key not null,
	[CreatedAt] [Date] not null,
	[UpdatedAt] [Date] not null,
	[DeletedAt] [Date] not null,
	[Balance] [float] not null,
	[Coin] [Varchar] (50) not null,
	[OwnerId] [Int] not null
)
GO

/****** Object:  Table [dbo].[Asset]    Script Date: 9/25/2023 3:07:02 PM ******/

CREATE TABLE [dbo].[Asset] (
	[Id] [int] primary key not null,
	[CreatedAt] [Date] not null,
	[UpdatedAt] [Date] not null,
	[DeletedAt] [Date] not null,
	[ImageUrl] [Varchar] (250) not null,
	[Title] [Nvarchar] (100) not null,
	[Price] [float] not null,
	[Category] [Nvarchar] (50) not null,
	[OwnerId] [Int] not null,
	[CreatorId] [Int] not null

)
GO

/****** Object:  Table [dbo].[Transactons]    Script Date: 9/25/2023 3:07:02 PM ******/

CREATE TABLE [dbo].[Transactons] (
	[Id] [int] primary key not null,
	[Coin] [Varchar] (50) not null,
	[Amount] [float] not null,
	[CreatedAt] [Date] not null,
	[AssetId] [Int] not null,
	[BuyerId] [Int] not null,
	[SellerId] [Int] not null,
	
)
GO

/****** Object:  Table [dbo].[Comments]    Script Date: 9/25/2023 3:07:02 PM ******/

CREATE TABLE [dbo].[Comments] (
	[Id] [int] primary key not null,
	[CreatedAt] [Date] not null,
	[UpdatedAt] [Date] not null,
	[DeletedAt] [Date] not null,
	[Comment] [Nvarchar] (250) not null,
	[AuthorId] [Int] not null,
	[AssetId] [Int] not null
)
GO
/*KHoa ngoai*/


ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Wallets] FOREIGN KEY([WalletId])  /*1*/
REFERENCES [dbo].[Wallets] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Wallets]
GO
/**/
ALTER TABLE [dbo].[Wallets]  WITH CHECK ADD  CONSTRAINT [FK_Wallets_Users] FOREIGN KEY([OwnerId]) /*2*/
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Wallets] CHECK CONSTRAINT [FK_Wallets_Users]
GO

ALTER TABLE [dbo].[Asset]  WITH CHECK ADD  CONSTRAINT [FK_Asset_Users] FOREIGN KEY([CreatorId]) /*3*/
REFERENCES [dbo].[Users] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Asset] CHECK CONSTRAINT [FK_Asset_Users]
GO
ALTER TABLE [dbo].[Asset]  WITH CHECK ADD  CONSTRAINT [FK_Asset_Customers] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Asset] CHECK CONSTRAINT [FK_Asset_Customers]
GO
/**/
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Users] FOREIGN KEY([AuthorId]) /*1*/
REFERENCES [dbo].[Users] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_Users]
GO

ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Asset] FOREIGN KEY([AssetId]) /*2*/
REFERENCES [dbo].[Asset] ([Id])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_Asset]
GO
/**/
/**/
ALTER TABLE [dbo].[Transactons]  WITH CHECK ADD  CONSTRAINT [FK_Transactons_Users] FOREIGN KEY([BuyerId])
REFERENCES [dbo].[Users] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Transactons] CHECK CONSTRAINT [FK_Transactons_Users]
GO
ALTER TABLE [dbo].[Transactons]  WITH CHECK ADD  CONSTRAINT [FK_Transactons_Customers] FOREIGN KEY([SellerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Transactons] CHECK CONSTRAINT [FK_Transactons_Customers]
GO
ALTER TABLE [dbo].[Transactons]  WITH CHECK ADD  CONSTRAINT [FK_Transactons_Asset] FOREIGN KEY([AssetId])
REFERENCES [dbo].[Asset] ([Id])
GO
ALTER TABLE [dbo].[Transactons] CHECK CONSTRAINT [FK_Transactons_Asset]
GO
