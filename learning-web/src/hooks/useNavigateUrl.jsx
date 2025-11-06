import { useNavigate } from "react-router-dom";

const useNavigateUrl = () => {
    const navigate = useNavigate();
    const goto = (where, state = null) => {
        let path = `/${where}`;
        navigate(path, { state: state }, { replace: true });
    }

    const back = () => {
        navigate(-1);
    }
    return { goto, back };
}

export default useNavigateUrl;