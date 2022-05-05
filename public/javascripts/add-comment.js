const req = require("express/lib/request");

const textareaEl = document.querySelector('textarea');
// let isExceed = false;
let commentStr = textareaEl.value;
// textareaEl.addEventListener('keyup', () => {
//   commentStr = textareaEl.value;
//   console.log(300 - commentStr.length);
//   console.log(isExceed);
//   if (commentStr.length > 300) {
//     isExceed = true;
//   }
//   document.querySelector('')
// });

async function createPostHandler(event) {
  event.preventDefault();
  const post_id = location.pathname.split('/')[2];
  const comment_text = commentStr;
  if (post_id && comment_text) {
    fetch('/api/comments', {
      method: 'post',
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      if (response.ok) {
        location.reload();
      } else {
        alert(response.statusText);
      }
    });
  }
}

document.querySelector('.form').addEventListener('submit', createPostHandler);
