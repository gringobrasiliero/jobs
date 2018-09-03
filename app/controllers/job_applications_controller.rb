class JobApplicationsController < ApplicationController
  before_action :set_jobApplication, only: [:show, :update, :destroy]

  def index
    @jobApplications =  JobApplication.all
    json_response(@jobApplications)
  end

  def create
    @jobApplication = JobApplication.create!(jobApplication_params)
  json_response(@jobApplication, :created)
  end

  def update
    @jobApplication.update!(jobApplication_params)
    head :no_content
  end

  def show
    json_response(@jobApplication)
  end

  def destroy
    @jobApplication.destroy
    head :no_content
  end

  private

  def jobApplication_params
    params.permit( :created_at, :title, :company, :description)
  end

  def set_jobApplication
    @jobApplication = JobApplication.find(params[:id])
  end


end
