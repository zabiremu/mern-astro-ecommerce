export const CreateInvoice = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const ReadInvoiceDetails = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const ReadInvoiceList = async (req, res) => {
  try {
    return res.json({ status: "success", message: "" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};
