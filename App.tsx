import * as React from 'react';
import Checkbox from './Components/Checkbox';
import './style.css';
import { list } from './list';

export default function App() {
  const [listOptions, setListOptions] = React.useState(list);
  /**
   * MY code
   */
  // this time all options will be updated with new key value pair
  // updated value will be assigned to state again
  const handleSelectAll = (check) => {
    console.log('function invoked', check);
    let updatedList = listOptions.map((_ele: any) => {
      /**
       * check why above commented code that assigning object key by square bracket
       * didnt work where as spread operator was working.
       */
      // _ele[checked] = check;
      // return _ele;
      return {
        ..._ele,
        checked: check,
      };
    });
    setListOptions(updatedList); // state updated
  };

  const handleSelect = (ele, checkedValue) => {
    // we are updating list options and adding new key value pair
    // for checked property and assigning it to state again.
    // this will happen only with ele which is selected, rest will be unchecked
    let updatedList = listOptions.map((_ele: any) => {
      if (ele.id === _ele.id) {
        return {
          ..._ele,
          checked: checkedValue,
        };
      } else {
        return _ele;
      }
    });

    setListOptions(updatedList); // state updated with new values
  };

  return (
    <div className="bg-slate-50 h-screen p-4 background-gradient">
      <div className="flex flex-col rounded-xl shadow-2xl  max-w-2xl mx-auto overflow-hidden">
        <Checkbox
          // passing label as props
          label="Select All"
          className="px-4 py-4 bg-gray-100"
          // if all options have checked key value as true then select all will be checked.
          checked={
            listOptions.filter((_ele: any) => {
              return _ele?.checked;
            }).length === listOptions.length
              ? true
              : false
          }
          onChange={(checked) => handleSelectAll(checked)}
        />
        <form className="py-4 px-4 flex flex-col  w-full bg-slate-100">
          {listOptions.map((ele: any) => {
            return (
              <Checkbox
                label={ele.name}
                key={ele.id}
                checked={ele?.checked}
                onChange={(checked) => handleSelect(ele, checked)}
                className="mb-2"
              />
            );
          })}
        </form>
      </div>
    </div>
  );
}
