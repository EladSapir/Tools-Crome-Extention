// Function to load the tool's HTML file into the popup
function loadTool(tool) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/tools/${tool}.html`, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById('toolbox-container').style.display = 'none';
      document.getElementById('tool-content').style.display = 'block';
      document.getElementById('tool-content').innerHTML = xhr.responseText;
      setupBackButton();
    }
  };
  xhr.send();
}

// Function to set up the back button to return to the tools list
function setupBackButton() {
  document.getElementById('back-button').addEventListener('click', function () {
    document.getElementById('toolbox-container').style.display = 'block';
    document.getElementById('tool-content').style.display = 'none';
    document.getElementById('tool-content').innerHTML = ''; // Clear the tool content
  });
}

// Search functionality
document.getElementById('search-bar').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const tools = document.querySelectorAll('.tool-item');
  
  tools.forEach(tool => {
    const toolName = tool.textContent.toLowerCase();
    if (toolName.includes(query)) {
      tool.style.display = 'block';
    } else {
      tool.style.display = 'none';
    }
  });
});

// Add event listeners to tool items to load the respective tool
document.querySelectorAll('.tool-item').forEach(tool => {
  tool.addEventListener('click', function() {
    const toolName = this.getAttribute('data-tool');
    loadTool(toolName);
  });
});
