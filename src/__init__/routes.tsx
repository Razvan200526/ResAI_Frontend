import { ErrorFallback } from '@common/components/ErrorFallback';
import { NotFoundPage } from '@common/NotFoundPage';
import { ApplicationsLayout } from '@frontend/applications/layout/ApplicationsLayout';
import { ApplicationInspectPage } from '@frontend/applications/pages/ApplicationInspectPage';
import { ApplicationPage } from '@frontend/applications/pages/ApplicationPage';
import { DashboardLayout } from '@frontend/dashboard/DashboardLayout';
import { HeroPage } from '@frontend/hero/HeroPage';

import { CoverLettersPage } from '@frontend/resources/cover-letter/CoverLettersPage';
import { CoverLetterInspectPage } from '@frontend/resources/cover-letter/CoverletterInspectPage';
import { FeatureNotImplemented } from '@frontend/resources/FeatureNotImplementedYet';
import { ResourceLayout } from '@frontend/resources/ResourceLayout';
import { ResumeInspectPage } from '@frontend/resources/resumes/ResumeInspectPage';
import { ResumePage } from '@frontend/resources/resumes/ResumePage';
import { AuthLayout } from '@frontend/shared/components/layout/AuthLayout';
import { SigninPage } from '@frontend/signin/SignInPage';
import { SignupPage } from '@frontend/signup/SignUpPage';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, Outlet } from 'react-router';
export const ErrorBoundaryLayout = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Outlet />
  </ErrorBoundary>
);

export const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: '/',
        element: <HeroPage />,
      },
      {
        path: '/signin',
        element: <SigninPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/home',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            path: 'dashboard',
            element: <DashboardLayout />,
          },
          {
            path: 'ask',
            element: <FeatureNotImplemented />,
          },
          {
            path: 'resources',
            element: <ResourceLayout />,
            children: [
              {
                index: true,
                element: <ResumePage />,
              },
              {
                path: 'coverletter',
                element: <CoverLettersPage />,
              },
              {
                path: 'coverletters/:id',
                element: <CoverLetterInspectPage />,
              },
              {
                path: 'chats',
                element: <FeatureNotImplemented />,
              },
              {
                path: 'resumes/:id',
                element: <ResumeInspectPage />,
              },
            ],
          },

          {
            path: 'settings',
            element: <FeatureNotImplemented />,
          },
          {
            path: 'applications',
            element: <ApplicationsLayout />,
            children: [
              {
                path: '',
                element: <ApplicationPage />,
              },
              {
                path: ':id',
                element: <ApplicationInspectPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
]);
