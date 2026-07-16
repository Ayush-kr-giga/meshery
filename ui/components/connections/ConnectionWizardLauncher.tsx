import { Button, Typography } from '@sistent/sistent';
import { styled } from '@/theme';
import CAN from '@/utils/can';
import { Keys } from '@meshery/schemas/permissions';
import AddIconCircleBorder from '@/assets/icons/AddIconCircleBorder';
import { useConnectionWizardModal } from '@/utils/context/ConnectionWizardContextProvider';

const LaunchButton = styled(Button)({
  width: 'fit-content',
  borderRadius: 5,
  padding: '8px',
  maxWidth: '100%',
  minWidth: 0,
  overflow: 'hidden',
});

const canOpenConnectionWizard = () =>
  CAN(Keys.LifecycleManagementAddCluster.id, Keys.LifecycleManagementAddCluster.function) ||
  CAN(Keys.MesherySystemConnectMetrics.id, Keys.MesherySystemConnectMetrics.function);

/**
 * Connections-toolbar entry for Create Connection. Opens the app-level wizard
 * (no kind preset) so selection starts at "Choose Connection".
 */
const ConnectionWizardLauncher = () => {
  const { openCreateConnection } = useConnectionWizardModal();

  return (
    <LaunchButton
      type="button"
      variant="contained"
      onClick={() => openCreateConnection()}
      disabled={!canOpenConnectionWizard()}
      data-testid="connection-create-connection"
    >
      <AddIconCircleBorder style={{ width: '20px', height: '20px' }} />
      <Typography
        noWrap
        style={{
          paddingLeft: '4px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginRight: '4px',
        }}
      >
        Create Connection
      </Typography>
    </LaunchButton>
  );
};

export default ConnectionWizardLauncher;