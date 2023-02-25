class ContributionsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index

  end

  def show

  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def contribution_params
    params.permit(:contributor, :description, :project_id, :skill_id)
  end
end
