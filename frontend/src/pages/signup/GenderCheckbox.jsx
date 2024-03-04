const GenderCheckbox = ()=>{
    return (
        // imported from DaisyUI 
            <div className="flex ">
                <div className="form-control">
                    <label className="label gap-2 cursor-pointer">
                        <span className="label-text text-gray-800">Male</span> 
                        <input type="radio" name="gender"
                        className="radio radio-sm border-gray-800" />
                    </label>
                </div>
                
                <div className="form-control">
                    <label className="label gap-2 cursor-pointer">
                        <span className="label-text text-gray-800">Female</span> 
                        <input type="radio" name="gender" 
                        className="radio radio-sm border-gray-800"/>
                    </label>
                </div>
            </div>
        );
    }
export default GenderCheckbox;