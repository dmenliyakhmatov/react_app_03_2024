import avatar from 'assets/images/avatar.jpg';
import cover from 'assets/images/cover.webp';
import { Article } from 'shared/types/article';

export const mockPosts: Article[] = [
  {
    id: 1,
    section: 'Technology',
    publication_date: '2024-02-14T22:02:07.227Z',
    title: 'The Future of Artificial Intelligence',
    cover_image: cover,
    views: 1200,
    likes: 850,
    comments: 45,
    bookmarks: 120,
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
  },
  {
    id: 2,
    section: 'Travel',
    publication_date: '2022-03-10',
    title: 'Exploring Hidden Gems in Europe',
    cover_image: cover,
    views: 980,
    likes: 720,
    comments: 32,
    bookmarks: 90,
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
  },
  {
    id: 3,
    section: 'Science',
    publication_date: '2022-03-05',
    title: 'The Wonders of Space Exploration',
    cover_image: cover,
    views: 1500,
    likes: 1100,
    comments: 75,
    bookmarks: 200,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 4,
    section: 'Food',
    publication_date: '2022-03-02',
    title: 'Delicious Recipes from Around the World',
    cover_image: cover,
    views: 800,
    likes: 500,
    comments: 28,
    bookmarks: 80,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 5,
    section: 'Fashion',
    publication_date: '2022-02-28',
    title: 'Latest Trends for the Season',
    cover_image: cover,
    views: 1200,
    likes: 890,
    comments: 60,
    bookmarks: 150,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 6,
    section: 'Health',
    publication_date: '2022-02-25',
    title: 'Tips for a Healthy Lifestyle',
    cover_image: cover,
    views: 1100,
    likes: 750,
    comments: 42,
    bookmarks: 110,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 7,
    section: 'Sports',
    publication_date: '2022-02-20',
    title: 'Exciting Moments in Sports History',
    cover_image: cover,
    views: 1300,
    likes: 920,
    comments: 55,
    bookmarks: 180,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 8,
    section: 'Music',
    publication_date: '2022-02-15',
    title: 'Discover New Music Releases',
    cover_image: cover,
    views: 950,
    likes: 680,
    comments: 38,
    bookmarks: 100,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 9,
    section: 'Movies',
    publication_date: '2022-02-10',
    title: 'Must-Watch Films of the Year',
    cover_image: cover,
    views: 1050,
    likes: 800,
    comments: 48,
    bookmarks: 130,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 10,
    section: 'Art',
    publication_date: '2022-02-05',
    title: 'Exploring Contemporary Art',
    cover_image: cover,
    views: 900,
    likes: 600,
    comments: 34,
    bookmarks: 95,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 11,
    section: 'Politics',
    publication_date: '2022-02-02',
    title: 'Current Political Landscape',
    cover_image: cover,
    views: 1100,
    likes: 780,
    comments: 50,
    bookmarks: 160,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 12,
    section: 'Nature',
    publication_date: '2022-01-28',
    title: 'Beautiful Landscapes Around the World',
    cover_image: cover,
    views: 1000,
    likes: 720,
    comments: 40,
    bookmarks: 120,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 13,
    section: 'Books',
    publication_date: '2022-01-25',
    title: 'Recommended Books for Every Reader',
    cover_image: cover,
    views: 850,
    likes: 550,
    comments: 30,
    bookmarks: 85,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 14,
    section: 'Business',
    publication_date: '2022-01-20',
    title: 'Entrepreneurship and Business Tips',
    cover_image: cover,
    views: 1200,
    likes: 870,
    comments: 58,
    bookmarks: 140,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
  {
    id: 15,
    section: 'Education',
    publication_date: '2022-01-15',
    title: 'Innovations in Education',
    cover_image: cover,
    views: 950,
    likes: 690,
    comments: 37,
    bookmarks: 105,
    user: {
      fullName: 'Дмитрий',
      email: 'mail@mail.ru',
      id: 2,
      avatar: avatar,
    },
    description: 'some description',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed tincidunt magna dolor, nec ultrices sem scelerisque vel.
      Cras tempor sodales nunc vel facilisis. Morbi aliquam odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna, vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida posuere. Sed quis bibendum quam. Suspendisse potenti.
      Duis lectus ante, dapibus ut metus non, venenatis malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt. Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
  },
];
