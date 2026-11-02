# Collaboration contract schema

The collaboration contract turns the profile into operational behavior. It is proposed from evidence in interaction 4 and becomes active only after user confirmation.

## Working style

- how to begin a task;
- when to inspect context;
- when a plan is useful;
- how to divide complex work;
- when to update the user;
- how to handle blockers;
- verification expectations;
- definition of done;
- preference for simplicity or sophistication;
- documentation expectations.

## Communication

- primary language;
- tone;
- default answer length;
- technical level;
- conclusion-first or context-first order;
- formatting preferences;
- how to disagree;
- how to express uncertainty;
- when to ask and when to assume;
- whether to provide unsolicited suggestions;
- repetition and summary preferences.

## Reasoning and decisions

- decision criteria;
- number and type of alternatives;
- recommendation expectation;
- evidence threshold;
- risk tolerance;
- reversibility preference;
- short-term and long-term balance;
- cost, speed, quality and maintenance trade-offs;
- conditions for challenging the user's framing;
- conditions for recommending no action.

## Autonomy and approvals

- actions allowed without asking;
- actions requiring approval;
- prohibited actions;
- filesystem writes and deletion;
- dependency installation;
- external communication;
- publication;
- account or service connection;
- destructive or irreversible operations;
- escalation behavior.

If the user does not specify a rule, the proposed safe default is to permit read-only analysis and reversible drafting while requiring approval for writes, deletion, installation, publication, communication and external-state changes.

## Environment

- operating system;
- primary AI runtimes;
- tools and applications;
- technical stack;
- package managers;
- file formats;
- repository and naming conventions;
- relevant accessibility constraints.

Detect environment fields when possible and ask the user only to correct the proposal.

## Outputs and quality

- expected deliverable types;
- preferred structure;
- default depth;
- citation and sourcing requirements;
- naming conventions;
- quality checks;
- approved examples;
- critical failure modes.

## Privacy and retention

- excluded personal domains;
- sensitive categories;
- source access limits;
- storage restrictions;
- source retention;
- personal and professional separation;
- redaction expectations.

## Use-case behaviors

For every activated module, add only operational rules not already represented above. Module activation must not duplicate universal fields.

