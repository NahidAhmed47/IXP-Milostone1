// What is ajax?
// AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more interactive web applications with the help of XML, HTML, CSS, and Java Script.
// AJAX uses XHTML for content, CSS for presentation, along with Document Object Model and JavaScript for dynamic content display.
// Conventional web application transmit information to and from the sever using synchronous requests. It means you fill out a form, hit submit, and get directed to a new page with new information from the server.
// With AJAX, when you hit submit, JavaScript will make a request to the server, interpret the results and update the current screen. In the purest sense, the user would never know that anything was even transmitted to the server.
// XML is commonly used as the format for receiving server data, although any format, including plain text, can be used.
// AJAX is a web browser technology independent of web server software.
// A user can continue to use the application while the client program requests information from the server in the background.
// Intuitive and natural user interaction. Clicking is not required, mouse movement is tracked, etc.
// Data-driven as opposed to page-driven.
// JavaScript and the XMLHttpRequest object provide a method for exchanging data asynchronously between browser and server to avoid full page reloads. 
// AJAX is a technique for creating fast and dynamic web pages.
// AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes.
// This means that it is possible to update parts of a web page, without reloading the whole page.

// example of ajax
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
