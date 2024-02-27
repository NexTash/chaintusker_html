let data = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      name: "lorem",
      slug: "lorem-psum",
      description: "lorem-psum",
      excerpt: "lorem-psum",
      image: "",
      author: {
        first_name: "John",
        last_name: "Doe",
      },
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: 2,
      name: "lorem",
      slug: "lorem-psum",
      description: "lorem-psum",
      excerpt: "lorem-psum",
      image: "",
      author: {
        first_name: "John",
        last_name: "Doe",
      },
      is_active: true,
      created_at: "",
      updated_at: "",
    },
  ],
};

function search(param) {
  return data.filter((item) => item.name == param);
}
