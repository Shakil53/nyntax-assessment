import { Select } from "antd";


const VehicleInformation = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div className="">
        <h1 className="border-b-2 border-violet-500">Vehicle Information</h1>
            <form className="mt-5 space-y-3 border-2 p-3 rounded-md">
                <div className="space-y-1">
                    <label>Vehicle Type<span className="text-red-500">*</span></label>
                    <Select
                        showSearch
                        className="w-full max-w-xs"
                        placeholder="Vehicle type"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                        {
                            value: 'Sedans',
                            label: 'Sedans',
                        },
                        {
                            value: 'Pickup Trucks',
                            label: 'Pickup Trucks',
                        },
                        {
                            value: 'Minivans',
                            label: 'Minivans',
                        },
                        ]}
                    />
                </div>
                <div className="space-y-1">
                    <label>Vehicle<span className="text-red-500">*</span></label>
                    <Select
                        showSearch
                        className="w-full max-w-xs"
                        placeholder="Select a Vehicle"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                        {
                            value: 'Toyota',
                            label: 'Toyota',
                        },
                        {
                            value: 'Toyota Tacoma',
                            label: 'Toyota Tacoma',
                        },
                        {
                            value: 'Ferrari',
                            label: 'Ferrari',
                        },
                        ]}
                    />
                </div>
            </form>
    </div>
    );
};

export default VehicleInformation;