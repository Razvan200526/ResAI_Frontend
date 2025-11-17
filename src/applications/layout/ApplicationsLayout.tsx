import { Button } from '@common/components/button';
import { NumberChip } from '@common/components/chips/NumberChip';
import { NumberChipSkeleton } from '@common/components/chips/NumberChipSkeleton';
import { H3 } from '@common/components/typography';
import { useAuth } from '@frontend/shared/hooks';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { CreateApplicationModal } from '../components/CreateApplicationModal';
import { useApplications } from '../hooks/applicationHooks';

export const ApplicationsLayout = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { data: user } = useAuth();
  const { data: applications, isFetching } = useApplications(user?.id || '');
  const handleCreateApplication = () => {
    setShowCreateForm(true);
  };

  return (
    <div className="border border-border min-h-screen bg-background flex flex-col">
      <nav className="w-full border-b border-border h-[calc(10dvh)] rounded flex items-center justify-between">
        <div className="p-4 flex items-center justify-center gap-2">
          <H3>Applications</H3>
          {isFetching ? (
            <NumberChipSkeleton />
          ) : (
            <NumberChip value={applications?.length || 0} />
          )}
        </div>
        <Button
          color="primary"
          variant="solid"
          size="sm"
          className="m-4"
          startContent={<PlusIcon className="size-4" />}
          onPress={handleCreateApplication}
        >
          Create
        </Button>
      </nav>
      <div className="flex-1">
        <Outlet />
      </div>

      {showCreateForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
            <CreateApplicationModal onClose={() => setShowCreateForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};
