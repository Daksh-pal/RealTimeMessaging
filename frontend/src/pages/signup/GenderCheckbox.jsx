const GenderCheckbox = ()=>{
    return (
        // imported from DaisyUI 
            <div className="flex justify-center ">
                <div className="form-control">
                    <label className="label gap-2 cursor-pointer">
                        <span className="label-text">Male</span> 
                        <input type="checkbox" className="checkbox checkbox-xs" />
                    </label>
                </div>
                
                <div className="form-control">
                    <label className="label gap-2 cursor-pointer">
                        <span className="label-text">Female</span> 
                        <input type="checkbox" className="checkbox checkbox-xs" />
                    </label>
                </div>
            </div>
        );
    }
export default GenderCheckbox;