let zakaz = [];

export const getAll = (req, res) => {
  res.status(200).json(zakaz);
};

export const create = (req, res) => {
  debugger;
  const newZakaz = {
    id: Date.now().toString(),
    time: new Date(Date.now()),
    ...req.body,
  };
  zakaz.unshift(newZakaz);
  res.status(201).json(newZakaz);
};

export const remove = (req, res) => {
  zakaz = zakaz.filter((s) => s.id !== req.params.id);
  res.json({ message: "Server has been removed." });
};
