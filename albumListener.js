import PocketBase from 'pocketbase';

const LOCAL_URL = 'http://127.0.0.1:8090';

export const streamAlbums = async (element) => {
  const pb = new PocketBase(LOCAL_URL);

  // Authenticate using a given 'users' collection:
  await pb
    .collection('users')
    .authWithPassword('john@pb.com', 'Superpassword1');

  // Subscribe to collections, works just like SignalR:
  pb.collection('posts').subscribe('*', (e) => {
    buildAlbumCard(
      `${LOCAL_URL}/api/files/${e.record.collectionId}/${e.record.id}/${e.record.image}`,
      e.record.title
    );
  });
};

export const buildAlbumCard = (src, title) => {
  const cards = document.getElementById('cards');

  const container = document.createElement('div');
  container.className = 'container';

  cards.appendChild(container);

  const img = document.createElement('img');
  img.src = src;
  img.className = 'card-image';

  container.appendChild(img);

  const row = document.createElement('div');
  row.className = 'row';

  const titleRef = document.createElement('h2');
  titleRef.innerHTML = title;

  row.appendChild(titleRef);

  container.appendChild(row);
};
