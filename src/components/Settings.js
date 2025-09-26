import React from 'react';
import useStore from '../store';
import './Settings.css';

function Settings() {
  const { lowFidelity, toggleLowFidelity } = useStore((state) => ({
    lowFidelity: state.lowFidelity,
    toggleLowFidelity: state.toggleLowFidelity,
  }));

  return (
    <div className="settings-panel">
      <label>
        <input
          type="checkbox"
          checked={lowFidelity}
          onChange={toggleLowFidelity}
        />
        Low-Fidelity Mode
      </label>
    </div>
  );
}

export default Settings;