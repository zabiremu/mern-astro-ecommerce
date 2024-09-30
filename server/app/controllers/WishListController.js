export const CreateWish = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const ReadWishList = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const RemoveWish = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};
