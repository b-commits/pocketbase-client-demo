import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { streamPosts } from './postListener.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Pocketbase Demo</h1>
    <table style="margin: auto;">
      <th>Title</th>
      <th>Author</th>
      <tbody id="table">
        <tr>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
      </tbody>
    <table>
  </div>
`;

streamPosts();