import Profiel from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="container mx-auto flex justify-between items-center my-6">
            <h3 className="text-5xl text-[#111111] font-bold">Knowledge Cafe</h3>
            <img src={Profiel} alt="" />
        </div>
    );
};

export default Header;