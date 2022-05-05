async function createPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (title && content) {
    fetch('/api/posts', {
      method: 'post',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    });
  }
}

document.querySelector('.form').addEventListener('submit', createPostHandler);