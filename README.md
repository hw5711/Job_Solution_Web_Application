# Program - Job Solution Web (https://aqueous-ridge-24601.herokuapp.com)
----------------------------------
The goal of this project is to create a web app to assist with 2 roles related to job solution(HR & Candidate).This project will focus on critical aspects of full-stack web development such as user access & security, server-side and client-side development, and UI/UX considerations.

Functional Requirements
------------------------
1. Users must be authenticated & authorized & retrive authentication to be able to access the website.
2. For HR role. HR are able to create and edit jobs. HR can review and make choice upon applications from candidates. HR users can edit profiles.
3. For Candidate role. Candidates can search jobs view detials of the job. Candidate can save the target jobs with a favorite tag. Candidate can fill out an application regard specific jobs and check the response from the HR.

Non-Functional Requirements
---------------------------
1. Front-end - Angular. For running frontend : "ng serve"
2. Server-side - Node.js.For running backend: "nodemon server"
3. Database - Mongodb Cloud
 
Client-side - UI:
---------------
1. Welcome page:
https://drive.google.com/file/d/13uXmvOarLD6jbBsL0KKA7NxUokH0jokp/view?usp=sharing

2. Login page:
https://drive.google.com/file/d/1TLtOUIQoxbnsXZRaFOCPBmH11jU0nN2C/view?usp=sharing

3. register page:
https://drive.google.com/file/d/1KRL4LmARQqXJWWsNr-SDdkk186ZXnMml/view?usp=sharing

4. Reset Password page:
click forget password, enter retrive email: https://drive.google.com/file/d/1Ff_zYj1PfDX5Upg9jgFv6W2EQIyAP9uG/view?usp=sharing
send link to the emial: https://drive.google.com/file/d/1uJ1RrtN4rSsB9UMM3wwwxHmCKHRWYI-Q/view?usp=sharing
reset new password:https://drive.google.com/file/d/1RjOLb8PHyDfkyKKSBK4mA2bVsGwhPs9i/view?usp=sharing

HR part:
1. post job page:
https://drive.google.com/file/d/1mqnLvb01c57B3eJX2Zc_qbJpUf3TWM6j/view?usp=sharing

2. view candidate page:
https://drive.google.com/file/d/15Z_6xPq0cdCiX5Knnl2NTXEKTkzeV4nz/view?usp=sharing

3. view and edit posted jobs:
https://drive.google.com/file/d/1VEQXd0NhRE-Ds0-64O9bwR8sRu_7MvyU/view?usp=sharing

4. edit profile page:
https://drive.google.com/file/d/1Q6ZXKaC8pBVNiHrT8DmP6uNDad26cEB9/view?usp=sharing

Candidate part:
1. serch job page:
https://drive.google.com/file/d/1oVnk-IUFzSm7dDkJBMJGsgwlW4YI-s2-/view?usp=sharing

2. check job detail page:
https://drive.google.com/file/d/1s6sHH5PNCzJBVarykjX2AfGMEWShdW6w/view?usp=sharing

3. check fav jobs page:
https://drive.google.com/file/d/1JWHVhjcBTPSj9eaFpvaYU2wY4rsTCig7/view?usp=sharing

4. apply job page:
https://drive.google.com/file/d/1I7hf1i5tB_6dMQJuNDEnYhkTFqNh4GUy/view?usp=sharing

5. job apply history page:
https://drive.google.com/file/d/1zj4B_FrcLcnaqW04zZFSID_jkAwboZdJ/view?usp=sharing

6. check company page:
https://drive.google.com/file/d/1QRsIOdy6st5uCvrrMvnVZTh-2w--NFf7/view?usp=sharing


Database screenshot:
--------------------
https://drive.google.com/file/d/1Bn54-HKfEn922gPlO3VrkCeer69RL494/view?usp=sharing
https://drive.google.com/file/d/1rK5fYbWn2RmiAhcmGXMY8utE1-eJF_b8/view?usp=sharing

Deploy Method - Heroku:
-----------------------

Screenshot: https://drive.google.com/file/d/1G8eo47hP-UxlcgGtM7PiQwHif6tNfUtG/view?usp=sharing

Unit Testing:
-------------
Unit testing for Angular component using Jest and puppeteer.

Config Steps:
-------------

-> ng start //To run the project with one terminal opened

-> npm test //To run test
   
-> Deploy to https://aqueous-ridge-24601.herokuapp.com

-> Reference of MEAN full-stack: https://www.djamware.com/post/5a0673c880aca7739224ee21/mean-stack-angular-5-crud-web-application-example

-> Full course of Udemy: https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/learn/lecture/10536910?start=0#overview

-> Will also use jqurey and bootstrap in the front end. https://www.youtube.com/watch?v=NaUs1lLcjWM

-> If you don't have Node.js and Node package management on your computer, command to check the node version: node -v . command to check the Node package management: npm -v. I use Node.js v10.15.3 and NPM 6.4.1 for this project.

-> Install Angular package : npm install -g @angular/cli
-> To run the frontend: ng serve
-> To run the backend: nodemon server

1. Initial a new project called hrweb, web browser: http://localhost:8080
 
2. npm install --save express body-parser morgan body-parser serve-favicon cookie-parser

3. npm install --save mongoose mongoose-unique-validator

4. Install nodemon for monitor backend,if denied by your system, use sudo in the front, command: npm install -g nodemon

5. The Mongo data is connected, check(username:huanwu5711@gmail.com, ask me for password) : https://cloud.mongodb.com/user?gclid=CjwKCAiA98TxBRBtEiwAVRLqu18HVh9EF8KHD2sN7hKSsXjUKHCAp6erVq4q5YHEZY5zQFjCdTFKaBoCnz4QAvD_BwE#/atlas/login?utm_source=google&utm_campaign=gs_footprint_row_search_brand-preregnopt-funnel_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&_bt=356246894377&_bn=g

6. npm install --save jquery

7. npm install --save popper.js

8. npm install ngx-bootstrap --save

9. npm install bootstrap

10. To run the backend, open another terminal window and go the current file dir, 
   command: nodemon server
   
11. npm install jsonwebtoken bcrypt rxjs dotenv crypto

12. npm install nodemailer
    
    ->To use this function, we need to Configuring a Gmail account.
    Launch your client, then click on your profile in the top-right corner -> Google Account -> Security. You'll see the          
    following setting: Enable access. While it might not seem like the most secure thing to do, it's required to let 
    Nodemailer use your Gmail account for mailing purposes.

13. npm install http-status-codes --save

14. npm install ngx-toastr --save

15. npm install --save @angular/material @angular/cdk @angular/animations

16. npm install concurrently --save

17. npm install bluebird

18. npm install hexo-cli

19. ǹpm install debug

20. npm install --save-dev jest
   
21.npm i puppeteer jest

22.npm install -D jest babel-jest babel-core babel-preset-env regenerator-runtime

23.npm install -D jest jest-preset-angular @types/jest

24. npm install --save hammer.js  (updated on April 7th)

25. npm install --save angular-hammer

26. npm install --save multer
