fetch('../pages/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load footer.html');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading footer:', error);
  });
