import React from 'react';
import Card from '@components/member-card';
import styles from '@components/new-members/new-members.module.scss';
import { membersContext } from '@store/members/members-context';
import { searchMemberContext } from '@store/search-members/searchMembers-context';
import { searchMembers } from '@helper-functions/search-members';

// returns card which shows details of new member
const renderNewMember = (newMember) => (
  <div className={styles.containerForNewMember}>
    <Card developerInfo={newMember} isMember={false} />
  </div>
);

const NewMemberList = () => {
  const {
    state: { newMembers },
  } = membersContext();
  const { searchTerm } = searchMemberContext();
  const filterMembers = searchMembers(newMembers, searchTerm);
  if (newMembers) {
    return (
      <div className={styles.container}>
        {filterMembers.map((newMember) => (
          <React.Fragment key={newMember.id}>
            {renderNewMember(newMember)}
          </React.Fragment>
        ))}
      </div>
    );
  }
  return null;
};

export default NewMemberList;
