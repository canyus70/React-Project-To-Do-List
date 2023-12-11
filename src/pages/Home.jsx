import { useState } from "react";

const Home = () => {
// checkbox klappt nicht wie ich es will 
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleDelete = (wishItemToDelete) => {
        const updatedList = wishList.filter(
            (item) => item.text !== wishItemToDelete.text
        );
        setWishList(updatedList);
    };




    const [wish, setWish] = useState("");
    const [priority, setPriority] = useState(""); 
    const [wishList, setWishList] = useState([]);

    const handleInputChange = (event) => {
        setWish(event.target.value); 
    };

    const handleSelectChange = (event) => {
        setPriority(event.target.value);
    };

    const handleAddWish = () => {
        console.log("Wish:", wish);
        console.log("Priority:", priority);
        const newWish = { text: wish, priority: priority };
        setWishList([...wishList, newWish]);
        //setWish("");
        //setPriority("");
    };


    return ( 
        <section className="text-center bg-red-400">
            <h1 className="text-lg font-medium">My Whishlist 🎄🎁</h1>
            <h3 className="mt-3">Add a wish to your list</h3>
            <div className="mt-6">
            <input type="text" name="input" id="input" placeholder="Type in your wish..." value={wish} onChange={handleInputChange}/>
            <select value={priority} onChange={handleSelectChange} >
                <option value="">Select Priority</option>
                <option value="high">High</option>
                <option value="low">Low</option>
            </select>
            </div>
            <button className="bg-green-600 self-auto w-1/4 mt-6" onClick={(event) => handleAddWish(event.target.value)}>Add wish</button>
            <div className="mt-8">
                {wishList.map((wishItem, index) => (
                    <div
                        key={index}
                        className={`p-4 mt-4 ${wishItem.priority === "high" ? "bg-green-300" : "bg-red-300"}`}>
                    <div>
                        <div className="flex justify-around">
                        <input type="checkbox" checked={checked} onChange={handleCheckboxChange} className="mr-4"/>
                        <button className="bg-slate-200" onClick={() => handleDelete(wishItem)}>Delete</button>
                        </div>
                        <p>{wishItem.text}</p>
                        <p>{wishItem.priority === "high" ? "Aber ganz schnell Weihnachtsmann" : "nicht so wichtig, aber immer noch ganz schlimm, wenn ich mein Geschenk nicht bekomme"}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Home;