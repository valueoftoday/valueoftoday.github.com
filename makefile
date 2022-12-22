.DEFAULT_GOAL:=all

all: install

.PHONY: install
install:
	@echo 'TODO'

.PHONY: sync
sync:
	@git-town sync

.PHONY: git-main
git-main:
	@git checkout main \
	&& git-town sync \
	&& git-town prune-branches

.PHONY: pr
pr:
	@git-town new-pull-request
