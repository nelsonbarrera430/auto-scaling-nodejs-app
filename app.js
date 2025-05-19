const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Auto Scaling Demo App</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #000000, #3a0ca3); /* negro a morado oscuro */
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background-color: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 2.5rem 4rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
          text-align: center;
        }
        h1 {
          color: #ffb703; /* dorado vibrante */
          font-size: 2.8rem;
          margin-bottom: 1rem;
        }
        h4 {
          font-size: 1.6rem;
          color: #90e0ef; /* azul claro */
          margin-bottom: 0.8rem;
        }
        p {
          font-size: 1.3rem;
          color: #caf0f8; /* azul muy suave */
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Auto Scaling Demo App</h1>
        <h4>Message: Success</h4>
        <p>Version: 1.0.0</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
});
