CREATE TABLE Category(
Category_Name VARCHAR(50) NOT NULL,
PRIMARY KEY (Category_Name)
);

CREATE TABLE Threads(
Thread_ID int AUTO_INCREMENT,
Thread_title VARCHAR(255) NOT NULL,
Thread_message VARCHAR(5000) NOT NULL,
Thread_Date DATE NOT NULL,
Category_Name VARCHAR(50) NOT NULL,
PRIMARY KEY (Thread_ID,Category_Name),
FOREIGN KEY (Category_Name) REFERENCES Category (Category_Name)
);

CREATE TABLE Posts(
Post_ID int AUTO_INCREMENT,
Post_title VARCHAR(255) NOT NULL,
Post_date DATE NOT NULL,
Posts_message VARCHAR (5000) NOT NULL,
Post_URL VARCHAR(2083),
Category_Name VARCHAR(50) NOT NULL,
PRIMARY KEY (Post_ID,Category_Name),
FOREIGN KEY (Category_Name) REFERENCES Category (Category_Name)
);

CREATE TABLE postComment(
CommentID int AUTO_INCREMENT,
Comment_message VARCHAR (5000) NOT NULL,
Comment_Date DATE NOT NULL,
Thread_ID VARCHAR(255),
Posts_ID VARCHAR (255),
PRIMARY KEY (CommentID),
FOREIGN KEY (Thread_ID) REFERENCES Threads (Thread_ID),
FOREIGN KEY (Posts_ID) REFERENCES Posts (Post_ID)
);

CREATE TABLE ratings(
CommentID int not null,
GoodCitation int not null,
ReliableSources int not null,
ConciseComment int not null,
GoodCounterLogic int not null,
Informative int not null,
LogicalFallacy int not null,
foreign key (CommentID) references postComment (CommentID),
primary key (CommentID)
);

#Updates
	Update ratings
	Set "ratingName" = "ratingName" + 2
	Where CommentID = "id";

#inserts go here

insert into Posts(Post_title,Post_date,Posts_message,Post_URL,Category_Name)
values ('post1','2016/2/12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','anime'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','anime'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','anime'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','anime'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','anime'),
('post1','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','coding'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','coding'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','coding'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','coding'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','coding'),
('post1','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','food'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','food'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','food'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','food'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','food'),
('post1','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','gaming'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','gaming'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','gaming'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','gaming'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','gaming'),
('post1','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','movies'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','movies'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','movies'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','movies'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','movies'),
('post1','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','news'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','news'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','news'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','news'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','news'),
('post1','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','philosophy'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','philosophy'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','philosophy'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','philosophy'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','philosophy'),
('post1','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','scienceandtechnology'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','scienceandtechnology'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','scienceandtechnology'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','scienceandtechnology'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','scienceandtechnology'),
('post1','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','codinghelp'),
('post2','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','codinghelp'),
('post3','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','codinghelp'),
('post4','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','codinghelp'),
('post5','2016-2-12','wew lad','https://answers.yahoo.com/question/index?qid=20111024181312AAbECrT','codinghelp');

insert into threads(Thread_title,Thread_message,Thread_Date,Category_Name)
values ('Thread1','wew lad', '2016-2-12','anime'),('Thread2','wew lad', '2016-2-12','anime')
,('Thread3','wew lad', '2016-2-12','anime'),('Thread4','wew lad', '2016-2-12','anime'),
('Thread5','wew lad', '2016-2-12','anime'),
('Thread1','wew lad', '2016-2-12','coding'),('Thread2','wew lad', '2016-2-12','coding')
,('Thread3','wew lad', '2016-2-12','coding'),('Thread4','wew lad', '2016-2-12','coding'),
('Thread5','wew lad', '2016-2-12','coding'),
('Thread1','wew lad', '2016-2-12','food'),('Thread2','wew lad', '2016-2-12','food')
,('Thread3','wew lad', '2016-2-12','food'),('Thread4','wew lad', '2016-2-12','food'),
('Thread5','wew lad', '2016-2-12','food'),
('Thread1','wew lad', '2016-2-12','gaming'),('Thread2','wew lad', '2016-2-12','gaming')
,('Thread3','wew lad', '2016-2-12','gaming'),('Thread4','wew lad', '2016-2-12','gaming'),
('Thread5','wew lad', '2016-2-12','gaming'),
('Thread1','wew lad', '2016-2-12','movies'),('Thread2','wew lad', '2016-2-12','movies')
,('Thread3','wew lad', '2016-2-12','movies'),('Thread4','wew lad', '2016-2-12','movies'),
('Thread5','wew lad', '2016-2-12','movies'),
('Thread1','wew lad', '2016-2-12','news'),('Thread2','wew lad', '2016-2-12','news')
,('Thread3','wew lad', '2016-2-12','news'),('Thread4','wew lad', '2016-2-12','news'),
('Thread5','wew lad', '2016-2-12','news'),
('Thread1','wew lad', '2016-2-12','philosophy'),('Thread2','wew lad', '2016-2-12','philosophy')
,('Thread3','wew lad', '2016-2-12','philosophy'),('Thread4','wew lad', '2016-2-12','philosophy'),
('Thread5','wew lad', '2016-2-12','philosophy'),
('Thread1','wew lad', '2016-2-12','scienceandtechnology'),('Thread2','wew lad', '2016-2-12','scienceandtechnology')
,('Thread3','wew lad', '2016-2-12','scienceandtechnology'),('Thread4','wew lad', '2016-2-12','scienceandtechnology'),
('Thread5','wew lad', '2016-2-12','scienceandtechnology'),
('Thread1','wew lad', '2016-2-12','codinghelp'),('Thread2','wew lad', '2016-2-12','codinghelp')
,('Thread3','wew lad', '2016-2-12','codinghelp'),('Thread4','wew lad', '2016-2-12','codinghelp'),
('Thread5','wew lad', '2016-2-12','codinghelp');

SELECT CommentID, @MaxVal =: GREATEST(GoodCitation,ReliableSources,ConciseComment,GoodCounterLogic,Informative,LogicalFallacy)
				  Case @MaxVal When GoodCitation Then 'GoodCitation'
							   When ReliableSources Then 'ReliableSources'
							   When GoodCounterLogic Then 'GoodCounterLogic'
							   When Informative Then 'Informative'
							   When LogicalFallacy Then 'LogicalFallacy'
							   When ConciseComment Then 'ConciseComment'
					END
FROM ratings;


