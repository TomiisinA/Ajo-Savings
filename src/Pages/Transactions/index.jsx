import { Table } from "../Dashboard/table";
import { useState } from "react";
import Input from "../../components/ui/Input";

const Transactions = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="m-6">
      <h1 className="text-2xl font-extrabold mb-6">Transactions</h1>
      <Input
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 max-w-sm"
      />
      <Table search={search} />
    </div>
  );
};

export default Transactions;
