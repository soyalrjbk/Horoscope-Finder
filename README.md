# ♎️ Horoscope Finder

A simple tool that finds your zodiac sign from your date of birth. Enter your birth month, day, and year, click **Check Your Horoscope!**, and the app matches your birthday to one of the 12 zodiac signs, from Aries to Pisces. If the date doesn't fall into any sign's range, it reports that the date of birth isn't valid.

## How It's Made:

**Tech used:**

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

The page has three number inputs for month, day, and year, each with `min` and `max` limits, plus a button to check your sign.

When the button is clicked, the `checkHoroscope()` function reads the month and day, converts them from strings to numbers with `Number()`, and runs them through an `if / else if` chain. Each zodiac sign spans the end of one month and the start of the next, so every condition combines two checks with `||`, for example:

```js
(month === 9 && day >= 24) || (month === 10 && day <= 23) // Libra
```

The first matching condition sets the result, and a final `else` catches any month or day that doesn't fit. The result is then printed with a template literal.

## Optimizations

- Show the result on the page in a `<p>` or `<div>` with `textContent`. Right now it only goes to the browser console, so users can't see it without opening DevTools.
- Store each sign's start and end dates in an array of objects and loop through it, replacing the twelve `else if` blocks.
- Validate real dates, so impossible ones like February 31 are rejected. Creating a `Date` object and checking its values would handle this.
- The year input isn't used yet. It could be used to show the person's age or their Chinese zodiac animal.
- Replace the leftover starter text: the page title ("Title in the tab") and the placeholder meta description and keywords.
- Add styling and a short description of each sign to make the result more fun to read.

## Lessons Learned:

This project gave me practice with conditional logic: combining `&&` and `||` to handle ranges that cross from one month into the next, and ordering `else if` statements so the right condition matches first. I also learned that values from input fields are strings, so they need to be converted with `Number()` before comparing them with `===`. Looking at the long chain of conditions, I can see how storing the sign data in an array or object would make the code shorter and easier to update.
