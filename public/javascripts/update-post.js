// fill in title and content the post data
const id = location.pathname.split('/')[3];
const titleEl = document.querySelector('#title');
const contentEl = document.querySelector('#content');

// update a post
function updateFormHandler(event) {
  event.preventDefault();
  const title = titleEl.value.trim();
  const content = contentEl.value.trim();
  if (title && content) {
    fetch(`/api/posts/${id}`, {
      method: 'PUT',
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

document.querySelector('.form').addEventListener('submit', updateFormHandler);
