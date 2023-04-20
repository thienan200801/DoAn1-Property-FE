const initialState = {
  menu: [
    {
      name: "gioi-thieu",
      link: "/gioi-thieu",
      id: "714c0101-a601-40b0-8e0d-4fdc063f8425",
    },
    {
      name: "nhu-cau-ban",
      id: "e89ea25d-5ccd-43e4-8943-e02b5b51c47f",
      link: "/nhu-cau-ban",
    },
    {
      name: "nhu-cau-mua",
      link: "/nhu-cau-mua",
      id: "6c2f462a-aeec-4bbe-a6d5-a7269969be0f",
    },
    {
      name: "gioi-thieu-du-an",
      link: "/gioi-thieu-du-an",
      id: "61240dc5-a042-4123-8323-5e470b0e84be",
    },
    {
      name: "tham-gia-cung-chung-toi",
      link: "/tham-gia-cung-chung-toi",
      id: "660d7b6a-153b-4b4f-95f5-55a38c2b4340",
    },
    {
      name: "tin-tuc",
      link: "/tin-tuc",
      id: "636e0488-b4c4-42ce-a571-92b8ea1d4f5f",
    },
  ],
};

const MenuReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default MenuReducer;
