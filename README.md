Project Name Backend Test [Short description or tagline about the project]

Installation [Explain how to install the project. Include any dependencies and steps necessary to get started.]

## Description

#Features
@Book
-create books
-find all books that available status

@Member
-create members
-find all members with books (if borrow)

@Borrow
-can borrow if members not in status penaltized,limit not < 0(i set it to 2 default), and the books status available(no members borrow at the moment) need [memberCode,bookCode] it will auto update book status to 'borrowed' and decrease limit member by 1
-check7Days it will check are the members already return the books or not( if more than 7 days member dnt give it back the status will change to penaltized)[],btw im setting to 60 seconds so u can check with method post #Note if success will show log 7 days found!
-returnBook, when return book need [memberCode,bookCode]its gonna check if member borrow the book or not, if yes the book returned, and[IF-member-with-status-penaltized-it-will-create-penalty-with-member-code-banned-for-3Days] it will auto change book status to available and increase limit member by 1 and delete borrow id with memberCode and bookCode
-check3Days, whenever the member with code in penalty it will banned 3 days and auto remove and change member status to active ,btw im setting it to 60 seconds so u can test it with method post #Note if success log 3 days found

@Unit test
-for unit test i have problem with rutes (my backend use src but unit test want to use ../../ its error but when i change to ../../ its success)
and im add api-gateway also with docker
thanks

#Example installation steps if applicable

git clone https://github.com/Adiidwn/nestjs-checker.git

cd backend , api-gateway

npm install

//

OR

docker compose up

use api-gateway port

connect to database

#how to start
npm run start:dev

[Provide instructions on how to use the project. Include code examples or command-line usage if applicable.]

Feel free to customize this template according to your project's specific needs and details!
