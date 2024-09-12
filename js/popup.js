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
  
  // Handle tool click event
  document.querySelectorAll('.tool-item').forEach(tool => {
    tool.addEventListener('click', function() {
      const toolName = this.getAttribute('data-tool');
      // Logic for opening/triggering the selected tool
      alert('You selected: ' + toolName);
    });
  });
  