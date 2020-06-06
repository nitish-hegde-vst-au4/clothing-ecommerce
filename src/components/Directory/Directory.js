import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../Redux/directory/directory.selectors';
import './Directory.scss';

const DirectoryMenu = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(DirectoryMenu);
