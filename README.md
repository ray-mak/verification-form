<h1>Overview</h1>
<p>This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).</p>
<h2>The Challenge</h2>
Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

<h2>Screenshot</h2>

<h2>My Process</h2>
<p>I first wrote the HTML and styled it. I was able to get the layout down for desktop, but had to take some time making it look nice for mobile. The mobile versions may still look a little janky depending on which device you use though. I then used JS to make the form and card interactive.</p>
<h3>Built With</h3>


- HTML
- CSS
- Javascript

<h2>What I Learned</h2>
<p>I learned how to use the "keyup" event listener to allow the card to update in real time. I also learned why the border hasn't been showing on my input:focus states. Turns out you need to set the "outline" property to "none" for the input element.</p>

<h2>Continued Development</h2>
<p>I think the styling could still be improved. Typical card formats have the card number in groups of four with a space in between. Right now the design just shows a long string of numbers. I would like to learn how I can format the input and display of the credit card number to have a space every 4th character so that it actually looks like a credit card</p>

<h1>Author</h1>
<p>Ray Mak</p>
https://www.frontendmentor.io/profile/ray-mak
