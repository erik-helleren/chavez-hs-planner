import * as React from "react";

import { 
  Program,
  ProgramOutcome,
  ProgramOutcomeDictionary
} from "shared/types";
import { SuccessChance } from "shared/enums";

import OutcomeCertainIcon from "shared/components/icons/outcome-certain";
import OutcomeLikelyIcon from "shared/components/icons/outcome-likely";
import OutcomeUncertainIcon from "shared/components/icons/outcome-uncertain";
import OutcomeUnlikelyIcon from "shared/components/icons/outcome-unlikely";
import OutcomeNoneIcon from "shared/components/icons/outcome-none";
import OutcomeNotImplementedIcon from "shared/components/icons/outcome-notimplemented";

import HSProgramElement from "./hs-program-element";

import "./hs-group.scss";

interface HSGroupProps {
  title: string
  programs: Program[]
  outcomes: ProgramOutcomeDictionary
  onSelectedProgramChange: (program: Program, outcome: ProgramOutcome | undefined) => any
}

interface ProgramCounts {
  certain: number
  likely: number
  uncertain: number
  unlikely: number
  none: number
  notImplemented: number
}

interface HSGroupState {
  collapsed: boolean
  programCounts: ProgramCounts
}

class HSGroup extends React.PureComponent<HSGroupProps, HSGroupState> {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      programCounts: this.getProgramCounts(props.programs, props.outcomes)
    }
  }

  private getProgramCounts = (programs: Program[], outcomes: ProgramOutcomeDictionary): ProgramCounts => {
    let counts: ProgramCounts = {
      certain: 0,
      likely: 0,
      uncertain: 0,
      unlikely: 0,
      none: 0,
      notImplemented: 0
    };
    programs.forEach( program => {
      const outcome = outcomes[program.id];
      if (outcome === undefined) {
        counts.notImplemented += 1;
      } else {
        switch(outcome.overallChance){
          case SuccessChance.CERTAIN:
            counts.certain += 1;
            break;
          case SuccessChance.LIKELY:
            counts.likely += 1;
            break;
          case SuccessChance.UNCERTAIN:
            counts.uncertain += 1;
            break;
          case SuccessChance.UNLIKELY:
            counts.unlikely += 1;
            break;
          case SuccessChance.NONE:
            counts.none += 1;
            break;
          case SuccessChance.NOTIMPLEMENTED:
            counts.notImplemented += 1;
            break;
          default:
            console.warn("Unrecognized SuccessChance for program " + program.id);
            break;
        }
      }
    });
    return counts;
  }

  private sortByOutcome = (a: Program, b: Program): number => {
    const aOutcome = this.props.outcomes[a.id]
    const bOutcome = this.props.outcomes[b.id]

    function toNumber(outcome: ProgramOutcome | undefined) {
      if (outcome === undefined) {
        return -1;
      }
      switch(outcome.overallChance) {
          case SuccessChance.CERTAIN: return 6;
          case SuccessChance.LIKELY: return 5;
          case SuccessChance.UNCERTAIN: return 4;
          case SuccessChance.UNLIKELY: return 3;
          case SuccessChance.NONE: return 2;
          case SuccessChance.NOTIMPLEMENTED: return 1;
      }
    }
    return toNumber(bOutcome) - toNumber(aOutcome);
  }

  componentWillReceiveProps(nextProps: HSGroupProps) {
    this.setState({
      programCounts: this.getProgramCounts(nextProps.programs, nextProps.outcomes)
    });
  }

  render() {
    const ICON_SIZE = "18px";
    return (
      <div 
        className={`hs-category-container ${this.state.collapsed ? "collapsed" : ""}`}
        onClick={ ev => this.setState({collapsed: !this.state.collapsed}) }
      >
        <div className="hs-category-header">
          <button 
            className={`hs-category-collapse-button ${this.state.collapsed ? "collapsed" : ""}`}
            onClick={ ev => this.setState({collapsed: !this.state.collapsed}) }
          >
            <div className="hs-category-collapse-button-icon">
              {">"}
            </div>
          </button>
          <div className="hs-category-info-container">
            <div className="hs-category-title">
              {this.props.title}
            </div>
            <div className="outcome-counts-wrapper">
              <div className="outcome-count">
                <div className="outcome-count-icon">
                  <OutcomeCertainIcon 
                    disabled={this.state.programCounts.certain === 0}
                    size={ICON_SIZE}
                  />
                </div>
                <div className="outcome-count-text">
                  {this.state.programCounts.certain > 0 && 
                  this.state.programCounts.certain 
                  }
                </div>
              </div>

              <div className="outcome-count">
                <div className="outcome-count-icon">
                  <OutcomeLikelyIcon 
                    disabled={this.state.programCounts.likely === 0}
                    size={ICON_SIZE}
                  />
                </div>
                <div className="outcome-count-text">
                  {this.state.programCounts.likely > 0 && 
                  this.state.programCounts.likely 
                  }
                </div>
              </div>

              <div className="outcome-count">
                <div className="outcome-count-icon">
                  <OutcomeUncertainIcon 
                    disabled={this.state.programCounts.uncertain === 0}
                    size={ICON_SIZE}
                  />
                </div>
                <div className="outcome-count-text">
                  {this.state.programCounts.uncertain > 0 && 
                  this.state.programCounts.uncertain 
                  }
                </div>
              </div>

              <div className="outcome-count">
                <div className="outcome-count-icon">
                  <OutcomeUnlikelyIcon 
                    disabled={this.state.programCounts.unlikely === 0}
                    size={ICON_SIZE}
                  />
                </div>
                <div className="outcome-count-text">
                  {this.state.programCounts.unlikely > 0 && 
                  this.state.programCounts.unlikely 
                  }
                </div>
              </div>

              <div className="outcome-count">
                <div className="outcome-count-icon">
                  <OutcomeNoneIcon 
                    disabled={this.state.programCounts.none === 0}
                    size={ICON_SIZE}
                  />
                </div>
                <div className="outcome-count-text">
                  {this.state.programCounts.none > 0 && 
                  this.state.programCounts.none 
                  }
                </div>
              </div>

              <div className="outcome-count">
                <div className="outcome-count-icon">
                  <OutcomeNotImplementedIcon 
                    disabled={this.state.programCounts.notImplemented === 0}
                    size={ICON_SIZE}
                  />
                </div>
                <div className="outcome-count-text">
                  {this.state.programCounts.notImplemented > 0 && 
                  this.state.programCounts.notImplemented 
                  }
                </div> 
              </div>

            </div>
          </div>
        </div>

        <div className="hs-list">
          { 
            this.props.programs.sort( this.sortByOutcome ).map( (program: Program) => {
              const outcome = this.props.outcomes[program.id];
              return (
                <HSProgramElement 
                  key={program.id} 
                  program={program} 
                  outcome={outcome}
                  onSelect={this.props.onSelectedProgramChange}
                /> 
              );
            })
          }
      </div>
    </div>
    );
  }
};

export default HSGroup;
