import { useMemo, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdFilterList, MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import RoomHeader from "../components/Rooms/RoomHeader";
import RoomCard from "../components/Rooms/RoomCard";
import Spinner from "../components/ui/Spinner";
import Badge from "../components/ui/Badge";
import { useRoomsQuery } from "../hooks/useRoomQueries";

const PRICE_OPTIONS = [
  { value: "all", label: "All Prices" },
  { value: "40-150", label: "$40 - $150" },
  { value: "151-300", label: "$151 - $300" },
  { value: "301-500", label: "$301 - $500" },
  { value: "501 to more", label: "$501+" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Rooms = () => {
  const [priceFilter, setPriceFilter] = useState("all");
  const [search, setSearch] = useState("");
  const { data: rooms = [], isLoading, isError } = useRoomsQuery(priceFilter);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rooms;
    return rooms.filter(
      (r) =>
        (r.room_title || "").toLowerCase().includes(q) ||
        (r.room_description || "").toLowerCase().includes(q)
    );
  }, [rooms, search]);

  const clearFilters = () => {
    setSearch("");
    setPriceFilter("all");
  };

  const hasActiveFilters = search || priceFilter !== "all";

  return (
    <div className="pb-16">
      <ScrollRestoration />
      <div className="py-8">
        <RoomHeader />
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-lg w-full">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <MdFilterList size={18} className="text-gray-500" />
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none"
            >
              {PRICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-500">Active filters:</span>
            {priceFilter !== "all" && (
              <Badge color="blue">
                {PRICE_OPTIONS.find(o => o.value === priceFilter)?.label}
                <button onClick={() => setPriceFilter("all")} className="ml-1 hover:text-blue-900">
                  <MdClose size={12} />
                </button>
              </Badge>
            )}
            {search && (
              <Badge color="purple">
                &quot;{search}&quot;
                <button onClick={() => setSearch("")} className="ml-1 hover:text-purple-900">
                  <MdClose size={12} />
                </button>
              </Badge>
            )}
            <button onClick={clearFilters} className="text-xs text-brand-500 hover:underline ml-2">
              Clear all
            </button>
          </div>
        )}

        <p className="text-sm text-gray-500">
          {isLoading ? "Loading rooms..." : `${filtered.length} room${filtered.length !== 1 ? 's' : ''} found`}
        </p>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Spinner size="lg" />
          </div>
        )}
        {isError && (
          <p className="text-center text-error font-medium py-10">Could not load rooms.</p>
        )}

        {!isLoading && !isError && filtered.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
              <FiSearch className="text-gray-400" size={36} />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">No rooms found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria.</p>
            <button onClick={clearFilters} className="text-brand-500 font-medium hover:underline text-sm">
              Clear filters
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!isLoading && !isError && filtered.length > 0 && (
            <motion.div
              key={priceFilter + search}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filtered.map((room) => (
                <motion.div key={room._id} variants={item}>
                  <RoomCard room={room} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Rooms;
