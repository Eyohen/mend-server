const nodemailer = require('nodemailer')
const dotenv=require('dotenv')



module.exports = async (from, email, subject, text, date, customer,information,price, advanced, medium,) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: false,
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});

	

		await transporter.sendMail({
			from: from,
			to: email,
			subject: subject,
			text: text,
            html: `<!DOCTYPE html>
			<html lang="en">
			<head>
			  <meta charset="UTF-8">
			  <meta name="viewport" content="width=device-width, initial-scale=1.0">
			  <title>Inline CSS Table Template</title>
			  <style>
				body {
				  font-family: Arial, sans-serif;
				  background-color: #f4f4f4;
				  padding: 20px;
				}
			
				table {
				  width: 100%;
				  border-collapse: collapse;
				  margin-top: 20px;
				}
			
				th, td {
				  border: 1px solid #ddd;
				  padding: 12px;
				  text-align: left;
				  color:gray;
				}
			
				th {
				  background-color: #7393B3;
				  color: white;
				}
			
				tr:nth-child(even) {
				  background-color: #f2f2f2;
				}
			
				h1 {
				  color: #333;
				}
			  </style>
			</head>
			<body>
				<h1>MEND</h1>
			  <h1>Hi!</h1>
			  <h3 style="font-size: 20px; font-weight: 100; color: gray;">Your receipt has arrived!</h3>
			
			  <h3 style="font-size: 20px; font-weight: 100; color: gray;">Date:${new Date(date).toDateString()}</h3>
			
			
			  <table>
				<thead>
				  <tr>
					<th>Customer Name</th>
					<th>Sewing Information</th>
					<th>Price(₦)</th>
					<th>Advanced(₦)</th>
					<th>Payment Medium</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>${customer}</td>
					<td>${information}</td>
					<td>${price}</td>
					<td>${advanced}</td>
					<td>${medium}</td>
				  </tr>
				
				</tbody>
			  </table>
			  <p style="padding-top: 20px; color: gray;">Disclaimer: We will not be held responsible for any claims or losses not claimed within sixty days of notification.</p>
			  <p style="padding-top: 20px; color: gray;">Looking forward to doing more business with you.</p>
			  <p style=" color: gray;">Yours truly,</p>
			  <p style="color: gray;">MEND</p>
			
			</body>
			</html> `
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
