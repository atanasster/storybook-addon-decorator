import React from 'react';

interface PanelProps {
  items: {
    class: string;
    label: string;
  }[],
  selected?: string,
  children: React.ReactNode,
}

export const PreviewPanel = ({ children, items, selected: defaultSelected }: PanelProps) => {
  const [selected, setSelected] = React.useState<string>(defaultSelected);
 
  const findClassName = () => {
    const item = items.find(i => i.label === selected);
    return item ? item.class : undefined;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}  
    >
      <div
        className={findClassName()}
        style={{
          flexBasis: '50%'
        }}  
      >
        {children}
      </div>  
      <div
        style={{
          flexBasis: '50%'
        }}  
      >
        {items.map(item => (
          <div  key={`${item.label}`}>
            <input
              name={item.label}
              type='checkbox'
              checked={item.label === selected}
              onChange={() => setSelected(item.label)}
            />
            {item.label}
          </div>  
        ))}
      </div>  
    </div>
  );    
};
