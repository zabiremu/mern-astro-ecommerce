export const CreateCart = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const ReadCart = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const RemoveCart = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const UpdateCart = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};
