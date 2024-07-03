USE [bookish]
GO
/****** Object:  Table [dbo].[authors]    Script Date: 03/07/2024 14:20:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[authors](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
 CONSTRAINT [PK__authors__3213E83F7FF02039] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[authors_of_books]    Script Date: 03/07/2024 14:20:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[authors_of_books](
	[authorId] [int] IDENTITY(1,1) NOT NULL,
	[bookId] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[books]    Script Date: 03/07/2024 14:20:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[books](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](255) NULL,
	[ISBN] [int] NULL,
	[added_at] [datetime] NULL,
 CONSTRAINT [PK__books__3213E83FCED815F8] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[borrows]    Script Date: 03/07/2024 14:20:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[borrows](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[copy_id] [int] NULL,
	[user_id] [int] NULL,
	[due_at] [datetime] NULL,
	[borrowed_at] [datetime] NULL,
 CONSTRAINT [PK__borrows__3213E83F3E47822A] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[copies]    Script Date: 03/07/2024 14:20:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[copies](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[bookId] [int] NULL,
 CONSTRAINT [PK__copies__3214EC079C382733] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 03/07/2024 14:20:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [nvarchar](255) NULL,
	[password] [nvarchar](255) NULL,
	[created_at] [datetime] NULL,
 CONSTRAINT [PK__users__3213E83FB59331AC] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[authors_of_books]  WITH CHECK ADD  CONSTRAINT [FK__authors_o__autho__2A164134] FOREIGN KEY([authorId])
REFERENCES [dbo].[authors] ([id])
GO
ALTER TABLE [dbo].[authors_of_books] CHECK CONSTRAINT [FK__authors_o__autho__2A164134]
GO
ALTER TABLE [dbo].[authors_of_books]  WITH CHECK ADD  CONSTRAINT [FK_authors_of_books_books] FOREIGN KEY([bookId])
REFERENCES [dbo].[books] ([id])
GO
ALTER TABLE [dbo].[authors_of_books] CHECK CONSTRAINT [FK_authors_of_books_books]
GO
ALTER TABLE [dbo].[borrows]  WITH CHECK ADD  CONSTRAINT [FK__borrows__copy_id__2CF2ADDF] FOREIGN KEY([copy_id])
REFERENCES [dbo].[copies] ([Id])
GO
ALTER TABLE [dbo].[borrows] CHECK CONSTRAINT [FK__borrows__copy_id__2CF2ADDF]
GO
ALTER TABLE [dbo].[borrows]  WITH CHECK ADD  CONSTRAINT [FK__borrows__user_id__2B0A656D] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[borrows] CHECK CONSTRAINT [FK__borrows__user_id__2B0A656D]
GO
ALTER TABLE [dbo].[copies]  WITH CHECK ADD  CONSTRAINT [FK__copies__bookId__2BFE89A6] FOREIGN KEY([bookId])
REFERENCES [dbo].[books] ([id])
GO
ALTER TABLE [dbo].[copies] CHECK CONSTRAINT [FK__copies__bookId__2BFE89A6]
GO
