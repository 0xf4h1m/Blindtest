// Select the element with class "panel panel-default"
var panel = document.querySelector('.panel.panel-default');

// Check if the panel exists
if (panel) {
    // Clear the existing content of the panel
    panel.innerHTML = '';

    // Create a new div for the new content
    var newContent = `
        <div class="panel-heading">
            <h3 class="panel-title">Blind XSS Attack Impact</h3>
        </div>
        <div class="panel-body">
            <h4>What is Blind XSS?</h4>
            <p>Blind XSS is a type of Cross-Site Scripting (XSS) attack where the attacker injects malicious scripts into the web application's input fields. These scripts are not executed on the user's browser immediately but are stored and executed later when accessed by another party (e.g., an admin or a backend system).</p>
            <h4>Potential Impact</h4>
            <ul>
                <li>Exfiltration of sensitive information (cookies, tokens, etc.)</li>
                <li>Control over the victim's session, leading to account takeover</li>
                <li>Arbitrary actions on behalf of the victim</li>
                <li>Further exploitation of the target system</li>
            </ul>
            <h4>Prevention</h4>
            <p>To prevent Blind XSS attacks, applications should follow these best practices:</p>
            <ul>
                <li>Input validation and sanitization</li>
                <li>Contextual output encoding (HTML, JavaScript, URL)</li>
                <li>Use of security headers like Content Security Policy (CSP)</li>
                <li>Regular security audits and code reviews</li>
            </ul>
        </div>
    `;

    // Insert the new content into the panel
    panel.innerHTML = newContent;
}
