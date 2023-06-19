import PocketBase from 'pocketbase';

export async function streamPosts(element) {
  const pb = new PocketBase('http://127.0.0.1:8090');

  // (Optionally) authenticate
  await pb
    .collection('users')
    .authWithPassword('john@pb.com', 'Superpassword1');

  console.log('Subscribing to collection...');
  // Subscribe to changes in any posts record
  pb.collection('posts').subscribe('*', function (e) {
    console.log(e.record);
    var tbodyRef = document.getElementById('table');

    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();

    // Insert a cell at the end of the row
    var albumCell = newRow.insertCell();
    var bandCell = newRow.insertCell();

    // Append a text node to the cell
    var album = document.createTextNode(e.record.title);
    var author = document.createTextNode(e.record.author);
    albumCell.appendChild(album);
    bandCell.appendChild(author);
  });
}
