export default class Model {
  constructor() {
    this.zakaz = [];
  }
  async mounted() {
    const res = await fetch("http://localhost:3000/api/server");
    this.zakaz = await res.json();
  }
  async remove(id) {
    await fetch(`/api/server/${id}`, { method: "DELETE" });
    this.zakaz = this.zakaz.filter((s) => s.id !== id);
  }
}
