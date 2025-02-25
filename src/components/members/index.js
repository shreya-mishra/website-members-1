import React from 'react';
import PreviewContainer from '@components/preview-container';
import { membersContext } from '@store/members/members-context';
import { searchMemberContext } from '@store/search-members/searchMembers-context';
import { searchMembers } from '@helper-functions/search-members';
import styles from '@components/members/members.module.scss';

const Members = () => {
  const {
    state: { members },
  } = membersContext();
  const { searchTerm } = searchMemberContext();
  const filterMembers = searchMembers(members, searchTerm);
  if (members) {
    return (
      <div className={styles.container}>
        {filterMembers.map((member) => (
          <React.Fragment key={member.id}>
            <PreviewContainer memberDetails={member} />
          </React.Fragment>
        ))}
      </div>
    );
  }

  return null;
};

export default Members;
