import React, {useState} from 'react';
import Group from './groupsByTournamentId';
import GroupTable from './groupClubs';

const GettingGroupName = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
    };

    const handleBackToTournaments = () => {
        setSelectedGroup(null);
    };

    return (
        <div>
            {selectedGroup ? (
                <GroupTable
                    tournamentId={selectedGroup.tournamentId}
                    groupId={selectedGroup.groupId}
                    groupName={selectedGroup.groupName}
                    onBackToTournaments={handleBackToTournaments}
                />
            ) : (
                // Pass the handleGroupClick function as onGroupClick prop
                <Group onGroupClick={handleGroupClick}/>
            )}
        </div>
    );
};

export default GettingGroupName;
