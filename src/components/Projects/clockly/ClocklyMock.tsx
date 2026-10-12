import type { ClocklyMock as MockKey } from "../projectData";
import {
  AuditMock,
  BalanceMock,
  ClockMock,
  LeaveApprovalMock,
  PayrollExportMock,
  WeekMock,
} from "./Mockups";
import { ShiftPlannerMock } from "./ShiftPlannerMock";
import { ApprovalsMock, TeamBoardMock } from "./TourMocks";

const ClocklyMock = ({ mock }: { mock: MockKey }) => {
  switch (mock) {
    case "clock":
      return <ClockMock />;
    case "shiftPlanner":
      return <ShiftPlannerMock />;
    case "audit":
      return <AuditMock />;
    case "leave":
      return (
        <div className="space-y-3">
          <LeaveApprovalMock />
          <BalanceMock />
        </div>
      );
    case "week":
      return <WeekMock />;
    case "teamBoard":
      return <TeamBoardMock />;
    case "payroll":
      return <PayrollExportMock />;
    case "approvals":
      return <ApprovalsMock />;
    case "dashboard":
      return (
        <div className="space-y-3">
          <ClockMock />
          <BalanceMock />
        </div>
      );
  }
};

export const ClocklyHeroMock = () => (
  <div className="relative w-full space-y-3">
    <WeekMock />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <ClockMock compact />
      <div className="hidden sm:block">
        <LeaveApprovalMock />
      </div>
    </div>
  </div>
);

export default ClocklyMock;
