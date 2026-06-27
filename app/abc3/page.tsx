"use client";

import { useState, useRef, useEffect } from "react";

interface ApbData {
  id: number;
  apb: string;
  noSpek: string;
  sudut: string;
  lebar: string;
  toleransi: string;
}

export default function Abc3Page() {
  const [tableData, setTableData] = useState<ApbData[]>([]);
  const [searchResults, setSearchResults] = useState<ApbData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  const tableRef = useRef<HTMLTableElement>(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setSearching(true);
    setSearched(true);

    try {
      const res = await fetch(`/api/abc3?q=${encodeURIComponent(searchTerm)}`);
      const result = await res.json();
      setSearchResults(result);
    } catch (error) {
      console.error("Gagal mencari data:", error);
      alert("Gagal mencari data");
    } finally {
      setSearching(false);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleAddToTable = (item: ApbData) => {
    const exists = tableData.some((d) => d.id === item.id);
    if (!exists) {
      setTableData([...tableData, item]);
      // Kosongkan form input setelah berhasil menambahkan
      setSearchTerm("");
      setSearchResults([]);
      setSearched(false);
    } else {
      alert("Data sudah ada di tabel");
    }
  };

  const handleRemoveFromTable = (id: number) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  const handleSort = () => {
    const sorted = [...tableData].sort((a, b) => {
      // Parse lebar as number, fallback to 0 if not parseable
      const lebarA = parseFloat(a.lebar) || 0;
      const lebarB = parseFloat(b.lebar) || 0;
      return sortAsc ? lebarA - lebarB : lebarB - lebarA;
    });
    setTableData(sorted);
    setSortAsc(!sortAsc);
  };

  const handlePrint = () => {
    if (tableData.length === 0) {
      alert("Tidak ada data untuk dicetak.");
      return;
    }
    setPrintMode(true);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  useEffect(() => {
    if (printMode) {
      const style = document.createElement("style");
      style.id = "abc3-print-styles";
      style.textContent = `
        @media print {
          body * { visibility: hidden; }
          #print-section, #print-section * { visibility: visible; }
          #print-section { position: absolute; left: 0; top: 0; width: 100%; padding: 10mm; }
          @page { margin: 5mm; size: landscape; }
          .no-print { display: none !important; }
          table { font-size: 10pt; border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid black; padding: 4px 8px; text-align: left; }
          th { background-color: #e5e7eb !important; font-weight: bold; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          h2 { text-align: center; font-size: 14pt; margin-bottom: 10px; }
        }
      `;
      document.head.appendChild(style);

      const afterPrint = () => {
        const s = document.getElementById("abc3-print-styles");
        if (s) s.remove();
        setPrintMode(false);
      };
      window.addEventListener("afterprint", afterPrint);
      const handleVisibility = () => {
        if (!document.hidden) {
          const s = document.getElementById("abc3-print-styles");
          if (s) s.remove();
          setPrintMode(false);
        }
      };
      window.addEventListener("visibilitychange", handleVisibility);
      return () => {
        window.removeEventListener("afterprint", afterPrint);
        window.removeEventListener("visibilitychange", handleVisibility);
        const s = document.getElementById("abc3-print-styles");
        if (s) s.remove();
      };
    }
  }, [printMode]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Form Input APB
        </h1>

        {/* Pencarian */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 no-print">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Cari Data
          </h2>
          <div className="flex gap-2 no-print">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Cari data di database..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button
              onClick={handleSearch}
              disabled={searching}
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searching ? "Mencari..." : "Cari"}
            </button>
          </div>

          {/* Hasil Pencarian */}
          {searched && (
            <div className="mt-4">
              {searchResults.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Data tidak ditemukan
                </p>
              ) : (
                <div className="overflow-x-auto no-print">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-gray-700">
                          ID
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-gray-700">
                          APB
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-gray-700">
                          No Spek
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-gray-700">
                          Sudut
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-gray-700">
                          Lebar Ply
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-gray-700">
                          Toleransi
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-center text-xs font-semibold text-gray-700">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResults.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">
                            {item.id}
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">
                            {item.apb}
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">
                            {item.noSpek}
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">
                            {item.sudut}
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">
                            {item.lebar}
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">
                            {item.toleransi}
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-sm text-center">
                            <button
                              onClick={() => handleAddToTable(item)}
                              disabled={tableData.some((d) => d.id === item.id)}
                              className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                            >
                              {tableData.some((d) => d.id === item.id)
                                ? "Sudah"
                                : "Add"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tabel Data yang Dipilih */}
        <div id="print-section" className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Data APB ({tableData.length})
            </h2>
            {tableData.length > 0 && (
              <div className="flex gap-2 no-print">
                <button
                  onClick={handleSort}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                    />
                  </svg>
                  Urutkan ({sortAsc ? "Kecil-Besar" : "Besar-Kecil"})
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  Print
                </button>
              </div>
            )}
          </div>

          <div className="overflow-x-auto no-print">
            <table
              id="print-table"
              ref={tableRef}
              className="w-full border-collapse"
            >
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    No
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    APB
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    No Spek
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Sudut
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Lebar Ply
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Toleransi
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center text-sm font-semibold text-gray-700">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="border border-gray-300 px-4 py-8 text-center text-gray-500"
                    >
                      Belum ada data. Cari data di database lalu klik tombol
                      "Add" untuk menambahkan ke tabel.
                    </td>
                  </tr>
                ) : (
                  tableData.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                        {item.apb}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                        {item.noSpek}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                        {item.sudut}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                        {item.lebar}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                        {item.toleransi}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                        <button
                          onClick={() => handleRemoveFromTable(item.id)}
                          className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition-colors"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}







